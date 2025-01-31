export interface Project {
    name: string;
    description: string;
    link: string;
}


export interface Answers {
    recipientName: string;
    name?: string;
    experience?: number;
    currentRole?: string;
    currentCompany?: string;
    projects?: Project[];
    targetCompany: string;
    targetRole: string;
    skillCategories: string[];
    resumeLink: string;
    projectLinks: string;
}