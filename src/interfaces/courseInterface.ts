import { ICurriculum } from "./curriculumInterface";

export interface ICourse {
  image: string;
  title: string;
  description: string;
  value: string;
  about: string;
  participationCertification: string;
  trainingCompletioncertification: string;
  internshipCompletioncertification: string;
  curriculum: ICurriculum[];
  startDate: Date;
  instructorName: string;
  enrollBy: Date;
}
