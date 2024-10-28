import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  arrivalTime: Date;

  @Column({ nullable: true })
  serviceStartTime: Date;

  @Column({ nullable: true })
  serviceEndTime: Date;
}
