import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';

@Injectable()
export class UploadHandlerService {
  async uploadPdf(pdf: Buffer, filename: string) {
    const s3 = new S3({
      region: process.env.REGION,
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_KEY,
      },
    });

    const s3Params = {
      Bucket: process.env.BUCKET,
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

    return report;
  }
}
