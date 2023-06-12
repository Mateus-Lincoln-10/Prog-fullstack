import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Report')
export class Report {
  @PrimaryGeneratedColumn('uuid')
  reportId: string;

  @Column({ name: 'report_url' })
  reportUrl: string;

  @CreateDateColumn({ name: 'report_created_at', type: 'timestamp' })
  reportCreatedAt: string;
}
