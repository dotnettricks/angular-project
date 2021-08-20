import { CourseTopic } from "./courseTopic";
import { Mentor } from "./mentor";

export class Course {
    id: number | undefined;
    name: string | undefined;
    summary: string | undefined;
    description: string | undefined;
    difficultyType: number | undefined;
    unitPrice: number | undefined;
    imageUrl: string | undefined;
    demoUrl: string | undefined;
    url: number | undefined;
    categoryId: number | undefined;
    createdDate: Date | undefined;
    mentor:Mentor | undefined;
    courseTopics:CourseTopic[];
}