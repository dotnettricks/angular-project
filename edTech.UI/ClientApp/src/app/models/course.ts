import { CourseTopic } from "./courseTopic";

export class Course {
    id: number | undefined;
    name: string | undefined;
    summary: string | undefined;
    description: string | undefined;
    difficultyType: number | undefined;
    unitPrice: number | undefined;
    imageUrl: string | undefined;
    url: number | undefined;
    categoryId: number | undefined;
    createdDate: Date | undefined;

    courseTopics:CourseTopic[];
}