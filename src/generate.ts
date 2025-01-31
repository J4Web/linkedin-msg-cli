import { Answers } from "./types";

export const skillsData = {
    frontend: ['HTML ', 'CSS ', 'JavaScript ', 'React'],
    backend: ['Node.js ', 'Express ', 'MongoDB ', 'Mongoose ', 'RESTful APIs ', 'GraphQL ', 'SQL ', 'PostgreSQL ', 'MySQL '],
    ml: ['Python ', 'TensorFlow ', 'Keras ', 'Scikit-learn ', 'Pandas ', 'NumPy ', 'Matplotlib ', 'OpenCV '],
    blockchain: ['Ethereum ', 'Solidity ', 'Web3.js ', 'Truffle', 'Hardhat ', 'Remix'],
    SDE: ['Data Structures ', 'Algorithms ', 'Problem Solving ', 'System Design']
};


export function generateMessage(ans: Answers): string {
    const {
        name,
        recipientName,
        currentRole,
        experience: yearsOfExperience,
        currentCompany,
        targetCompany,
        targetRole,
        skillCategories,
        resumeLink,
        projectLinks
    } = ans;

    let message = `Hi ${recipientName || 'there'},\n\n`;

    if (name) {
        message += `My name is ${name} and I am currently working as a ${currentRole || 'professional'} at ${currentCompany || 'my current company'}. `;
    }

    if (yearsOfExperience) {
        message += `I have ${yearsOfExperience} years of experience in the industry. `;
    }

    if (targetCompany && targetRole) {
        message += `I am very interested in the ${targetRole} position at ${targetCompany}. `;
    }

    // Default skill categories
    if (ans.skillCategories.length === 0) {
        ans.skillCategories = ['Frontend', 'Backend'];
    }

    if (skillCategories && skillCategories.length > 0) {
        message += `\n\nHere is a snapshot of my skills:\n \n`;
        if (skillCategories.includes('frontend')) {
            message += `-> Frontend: ${skillsData['frontend']}\n`;
        }
        if (skillCategories.includes('backend')) {
            message += `-> Backend: ${skillsData['backend']}\n`;
        }
        if (skillCategories.includes('ml')) {
            message += `-> Machine Learning: ${skillsData['ml']}\n`;
        }
        if (skillCategories.includes('blockchain')) {
            message += `-> Blockchain: ${skillsData['blockchain']}\n`;
        }
        if (skillCategories.includes('Full-stack Developer')) {
            message += `-> Full-stack Developer: ${skillsData['frontend']}, ${skillsData['backend']}\n`
        }


    }


    if (resumeLink) {
        message += `\nYou can find my resume here: ${resumeLink}. `;
    }

    if (projectLinks) {
        message += `Here are some links to my projects: ${projectLinks}. `;
    }

    message += `\n\nI would greatly appreciate it if you could refer me for the role.\n `;
    message += `\n\nThank you for your time and consideration.\n\nBest regards,\n${name || 'Your Name'}`;

    return message;
}
