#!/usr/bin / env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import { skillsData } from './generate';
import { Answers } from './types';
import { generateMessage } from './generate'



const askQuestions = async () => {
    const questions = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: input => input.trim() !== '',
        },
        {
            type: 'input',
            name: 'recipientName',
            message: "What is the recipient's name?",
            validate: input => input.trim() !== '',
        },
        {
            type: 'input',
            name: 'currentRole',
            message: 'What is your current role?',
            default: 'Full-stack Developer',
        },
        {
            type: 'input',
            name: 'experience',
            message: 'Years of experience?',
            default: '1',
        },
        {
            type: 'input',
            name: 'currentCompany',
            message: 'Current company name:',
        },
        {
            type: 'input',
            name: 'targetCompany',
            message: 'Target company name:',
        },
        {
            type: 'input',
            name: 'targetRole',
            message: 'Target role:',
        },
        {
            type: 'checkbox',
            name: 'skillCategories',
            message: 'Select skill categories to include:',
            choices: Object.keys(skillsData),
            default: Object.keys(skillsData).slice(0, 2) // Auto-select first 2 categories
        },
        {
            type: 'input',
            name: 'resumeLink',
            message: 'Your resume link:',
        },
        {
            type: 'input',
            name: 'projectLinks',
            message: 'Project links (comma-separated):',
        }
    ]);

    return questions;
}





const sleep = (r = 1000) => new Promise(resolve => setTimeout(resolve, r));


async function main() {

    console.log(chalk.bgCyan('Welcome to the LinkedIn Message Generator!'));
    await sleep(1000);
    console.log(chalk.bgCyan('Please provide details for your projects:'));

    const ques: Answers = await askQuestions();
    await sleep(1000);

    console.log(chalk.bgGreen('Please wait we are generating your message...\n \n'));
    const msg = generateMessage(ques);

    await sleep(1000);
    console.log((msg))
}






await main();