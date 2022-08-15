import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

// Сервис по сути делает логику, если контроллер работает с
// запросами, делает редирект, работу с параметрами,
// то сервис выполняет всю логическую составляющую

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

@Injectable()
export class UsersService {
    private users: User[] = [{
        id: "1",
        first_name: "Тимур",
        last_name: "Селин",
        email: "selin.ta@phystech.edu",
        password: "12345",
        balance: 1000,
        status: "admin",
        image: "imagesrc"
    }]

    getAll(): User[] {
        return this.users
    }

    getById(id: string): User {
        return this.users.find(user => user.id === id)
    }

    create(userDto: CreateUserDto): void {
        this.users.push({
            ...userDto,
            id: Date.now().toString()
        })
    }

    update(id: string, newUserData: object): User[] {
        return this.users.map((user) => ( user.id === id ? { ...user, ...newUserData } : user ));
    }

    delete(id: string) {
        return this.users = this.users.filter(user => user.id !== id)
    }
}