
import Category from './(section)/home/Category'
import StatsSection from './(section)/home/Stats';
import { stats, steps, categories, jobData, feedbacks } from './data/data';
import WorkProcess from './(section)/home/workProcess';
import Recruiter from './(section)/home/Recruiter';
import HomePage from './(section)/home/page';
import { Feedback } from './(section)/about-us/Swiper';
import MatchedJobs from './(section)/home/matchedjob';

export default function Home() {
  return (
    <>
      <HomePage jobData={jobData}/>
      <Category categories={categories} />
      <StatsSection stats={stats} />
      <WorkProcess steps={steps} />
      <Recruiter />
      <Feedback feedbacks={feedbacks}/>
      <MatchedJobs />
    </>
  );
}
