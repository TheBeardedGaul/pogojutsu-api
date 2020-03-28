import { User } from "./User.entity";
import { Controller, Get, Post, Param, Body, Put, Delete } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUserDto";
import { UpdateUserDto } from "./dto/updateUserDto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(":id")
    async findOne(@Param("id") id): Promise<User> {
        return this.usersService.findOne(id);
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.usersService.update(id, updateUserDto);
    }


    @Delete(":id")
    remove(@Param("id") id: string): Promise<void> {
        return this.usersService.remove(id);
    }
}