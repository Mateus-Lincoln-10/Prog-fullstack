import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';

@Injectable()
export class UploadHandlerService {
  constructor(private configService: ConfigService) {}
  async uploadPdf(pdf: Buffer, filename: string) {
    const s3 = new S3({
      region: this.configService.get<string>('REGION'),
      credentials: {
        accessKeyId: this.configService.get<string>('S3_ACCESS_KEY'),
        secretAccessKey: this.configService.get<string>('S3_SECRET_KEY'),
      },
    });

    const s3Params = {
      Bucket: this.configService.get<string>('BUCKET'),
      Key: `/public/${filename}`,
      Body: pdf,
      ContentType: 'application/pdf',
      ACL: 'public-read',
    };

    const report = await s3
      .upload(s3Params, (err) => {
        if (err) {
          console.error('err', err);
        }
      })
      .promise();

    return report.Location;
  }
}
