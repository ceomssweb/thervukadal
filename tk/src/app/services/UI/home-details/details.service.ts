import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

constructor() { }

getDetailsData() {
  return [
  {
    id: '1',
    description: 'TK—Thervukadal is the supreme online coaching for competitive exams. We offer free mock tests and online coaching for UPSC, TNPSC, Group D, NEET, JEE, JEEE, SSC CGL, CHSL, RRB ALP, MTS, NTPC, and State PSC exams. We aim to qualify students/aspirants with the mastery and practice they need to attain their careers.'
},
{
  id: '2',
  description: 'Our mock tests are crafted by a team of highly experienced educators and industry professionals who are experts in their respective fields. They ensure that the tests align with the latest exam trends and curriculum requirements and provide realistic and accurate assessments of your skills.'
},
{
id: '3',
description: 'Our mock exams are designed to mirror the real exam experience, including accurate time constraints, question formats, and overall structure. This realistic simulation helps you adapt to the exams pacing and pressure, allowing you to stay calm and focused, and ultimately boosting your performance when it counts most.'
},
{
id: '4',
description: 'Upon finishing a mock test, you will receive instant feedback and thorough explanations for every question. This will allow you to quickly identify your strong points and areas for improvement, giving you the insights needed to fine-tune your study strategy and prioritize topics that require more focus.'
},
{
id: '5',
description: 'Our intuitive dashboard will allow you to track your progress effortlessly and measure your improvements over time. With detailed analytics, you’ll gain valuable insights into your performance, helping you refine your study plan and make data-driven adjustments to enhance your preparation.'
},
{
  id: '6',
  description: 'Our team specialists used to regularly update our mock tests to align with the most recent exam formats and syllabus updates. This ensures you’re always working with the most relevant and accurate content, keeping your preparation on track and in sync with current trends.'
}
  ];
}

showDetails() {
  return Promise.resolve(this.getDetailsData());
}

}
