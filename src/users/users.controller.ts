import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

interface User {
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    balance: number,
    status: string,
    image: string
}

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {

    }

    @Get()
    getUsers(): User[] {
        return this.userService.getAll()
    }

    @Get(':id')
    getUser(@Param('id') id: string): User {
        return this.userService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createUser(@Body() CreateUserDto: CreateUserDto) {
        return this.userService.create(CreateUserDto)
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        this.userService.delete(id)
    }

    @Put(':id')
    updateUser(@Body() UpdateUserDto: UpdateUserDto, @Param('id') id: string): object {
        return this.userService.update(id, UpdateUserDto)
    }

}