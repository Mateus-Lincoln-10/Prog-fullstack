import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('login')
export class LoginEntity {
  @PrimaryGeneratedColumn('uuid')
  loginId: string;

  @Column({ name: 'login_email' })
  loginEmail: string;

  @Column({ name: 'login_password' })
  loginPassword: string;
}
