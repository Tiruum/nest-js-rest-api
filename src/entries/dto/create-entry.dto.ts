export class CreateEntryDto {
    readonly title: string
    readonly time: string[]
    readonly date: string
    readonly color: string
    readonly darkColor: string
    readonly periodic: "no-repeat" | "daily" | "weekly" | "monthly"
    readonly userId: string
    readonly username: string
}