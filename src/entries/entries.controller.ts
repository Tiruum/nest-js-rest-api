import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { EntriesService } from './entries.service';

interface Entry {
    id: string,
    title: string,
    time: string[],
    date: string,
    color: string,
    darkColor: string,
    periodic: "no-repeat" | "daily" | "weekly" | "monthly",
    userId: string
}

@Controller('entries')
export class EntriesController {
    constructor(private readonly entryService: EntriesService) {

    }

    @Get()
    getEntries(): Entry[] {
        return this.entryService.getAll()
    }

    @Get(':id')
    getEntry(@Param('id') id: string): Entry {
        return this.entryService.getById(id)
    }

    @Post()
    @Header('Content-Type', 'application/json')
    @HttpCode(HttpStatus.CREATED)
    createEntry(@Body() CreateEntryDto: CreateEntryDto) {
        return this.entryService.create(CreateEntryDto)
    }

    @Delete(':id')
    deleteEntry(@Param('id') id: string) {
        this.entryService.delete(id)
    }

    @Put(':id')
    updateEntry(@Body() UpdateEntryDto: UpdateEntryDto, @Param('id') id: string): object {
        return this.entryService.update(id, UpdateEntryDto)
    }
}