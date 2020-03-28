import { PrimaryGeneratedColumn, Column } from "typeorm";

export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column()
    pogoPlayerName: string;
    
    @Column()
    silphPlayerName: string;

    @Column()
    trainerCode: string;
}