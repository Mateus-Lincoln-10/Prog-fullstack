import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class PdfConverterService {
  async convertToPdf(data: any): Promise<Buffer> {
    const browser = await puppeteer.launch({
      executablePath: '/usr/bin/google-chrome',
      args: ['--no-sandbox'],
    });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);

    await page.setContent(data.html);

    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      displayHeaderFooter: true,
      margin: { top: '2cm', right: '2cm', bottom: '2cm', left: '2cm' },
    });
    return pdf;
  }
}
