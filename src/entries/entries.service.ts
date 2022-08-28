import { Injectable } from '@nestjs/common';
import { CreateEntryDto } from './dto/create-entry.dto';

// Сервис по сути делает логику, если контроллер работает с
// запросами, делает редирект, работу с параметрами,
// то сервис выполняет всю логическую составляющую

interface Entry {
    id: string,
    title: string,
    time: string[],
    date: string,
    color: string,
    darkColor: string,
    periodic: "no-repeat" | "daily" | "weekly" | "monthly",
    userId: string,
    username: string
}

@Injectable()
export class EntriesService {
    private entries: Entry[] = []

    getAll(): Entry[] {
        return this.entries
    }

    getById(id: string): Entry {
        return this.entries.find(entry => entry.id === id)
    }

    create(entryDto: CreateEntryDto): void {
        this.entries.push({
            ...entryDto,
            id: Date.now().toString()
        })
    }

    update(id: string, newEntryData: object): Entry[] {
        return this.entries.map((entry) => ( entry.id === id ? { ...entry, ...newEntryData } : entry ));
    }

    delete(id: string) {
        return this.entries = this.entries.filter(entry => entry.id !== id)
    }
}