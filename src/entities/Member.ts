import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany } from 'typeorm';
import { Note } from './Note';
import { IsNotEmpty, IsEmail, MinLength, MaxLength, IsString } from 'class-validator';

@Entity('member', { schema: 'babelfish' })
export class Member {
  @Column('varchar', { primary: true, name: 'email', length: 50 })
  @ApiProperty({
    example: 'argon1025@gmail.com',
    description: '이메일',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  @MinLength(1)
  @MaxLength(49)
  userid: string;

  @Column('varchar', {
    name: 'name',
    nullable: true,
    length: 11,
    default: () => "'User'",
  })
  @ApiProperty({
    example: 'argon1025',
    description: '별명',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(10)
  name: string | null;

  @Column('varchar', { name: 'password', length: 64 })
  @ApiProperty({
    example: 'password1234',
    description: '패스워드',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(64)
  password: string;

  @Column('varchar', { name: 'salt', length: 64 })
  salt: string;

  @OneToMany(() => Note, (note) => note.memberEmail2)
  notes: Note[];
}
