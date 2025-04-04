import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  regions: string[] = [
    'andijan',
    'bukhara',
    'fergana',
    'jizzakh',
    'karakalpakstan',
    'namangan',
    'navoiy',
    'qashqadaryo',
    'samarqand',
    'sirdaryo',
    'surxondaryo',
    'tashkent',
    'xorazm',
  ];
  constructor(private prisma: PrismaService) {}

  getData() {
    return this.prisma.ucell.findMany();
  }

  saveMockData() {
    return this.prisma.ucell.createMany({
      data: [
        { region: 'sirdarya', item: 175, units: 2, subscribers: 125000 },
        { region: 'samarkand', item: 175, units: 5, subscribers: 125000 },
        { region: 'tashkent', item: 200, units: 7, subscribers: 1290 },
        { region: 'bukhara', item: 200, units: 11, subscribers: 4990 },
        { region: 'khorezm', item: 175, units: 14, subscribers: 1290 },
        { region: 'tashkent', item: 175, units: 27, subscribers: 19990 },
        { region: 'tashkent', item: 200, units: 28, subscribers: 8990 },
        { region: 'djizzak', item: 200, units: 28, subscribers: 4990 },
        { region: 'bukhara', item: 200, units: 36, subscribers: 4990 },
        { region: 'bukhara', item: 200, units: 42, subscribers: 23950 },
        { region: 'khorezm', item: 170, units: 46, subscribers: 8990 },
        { region: 'bukhara', item: 170, units: 50, subscribers: 19990 },
        { region: 'sirdarya', item: 170, units: 50, subscribers: 4990 },
        { region: 'khorezm', item: 170, units: 53, subscribers: 1290 },
        {
          region: 'karakalpakistan',
          item: 170,
          units: 55,
          subscribers: 12490,
        },
        { region: 'samarkand', item: 170, units: 66, subscribers: 1990 },
        { region: 'samarkand', item: 200, units: 67, subscribers: 1290 },
        { region: 'samarkand', item: 200, units: 75, subscribers: 1990 },
        { region: 'bukhara', item: 170, units: 80, subscribers: 8990 },
        { region: 'samarkand', item: 170, units: 87, subscribers: 15000 },
        { region: 'bukhara', item: 170, units: 90, subscribers: 4990 },
        { region: 'samarkand', item: 170, units: 90, subscribers: 4990 },
        { region: 'samarkand', item: 170, units: 94, subscribers: 19990 },
        { region: 'samarkand', item: 200, units: 96, subscribers: 4990 },
        { region: 'tashkent', item: 200, units: 4, subscribers: 4990 },
        { region: 'surkhandarya', item: 135, units: 15, subscribers: 19990 },
        { region: 'samarkand', item: 135, units: 16, subscribers: 15990 },
        { region: 'sirdarya', item: 200, units: 29, subscribers: 1990 },
        { region: 'tashkent', item: 200, units: 35, subscribers: 4990 },
        { region: 'djizzak', item: 170, units: 60, subscribers: 4990 },
        { region: 'djizzak', item: 170, units: 60, subscribers: 8990 },
        { region: 'khorezm', item: 200, units: 62, subscribers: 4990 },
        { region: 'khorezm', item: 200, units: 64, subscribers: 8990 },
        { region: 'khorezm', item: 200, units: 74, subscribers: 15990 },
        {
          region: 'karakalpakistan',
          item: 170,
          units: 81,
          subscribers: 19990,
        },
        { region: 'khorezm', item: 170, units: 95, subscribers: 1990 },
        { region: 'khorezm', item: 170, units: 96, subscribers: 4990 },
        { region: 'djizzak', item: 170, units: 3, subscribers: 275000 },
        { region: 'karakalpakistan', item: 175, units: 7, subscribers: 19990 },
        { region: 'djizzak', item: 175, units: 32, subscribers: 1990 },
        { region: 'tashkent', item: 175, units: 56, subscribers: 2990 },
        { region: 'khorezm', item: 175, units: 57, subscribers: 19990 },
        { region: 'samarkand', item: 200, units: 76, subscribers: 1990 },
      ],
    });
  }
  removeMockData() {
    return this.prisma.ucell.deleteMany();
  }

  async summarized() {
    // const result = await this.prisma.ucell.findMany({
    //   where: {
    //     region: {
    //       in: this.regions,
    //     },
    //   },
    // });

    // return result;
    // return this.prisma.ucell.aggregate({
    //   where: {
    //     region: {
    //       in: this.regions,
    //     },
    //   },
    //   _sum: {
    //     subscribers: true,
    //   },
    // });
    const result = await this.prisma.ucell.groupBy({
      by: ['region'],
      _sum: {
        subscribers: true,
        item: true,
        units: true,
      },
    });
    console.log(result);
    return { data: result };
  }
}
