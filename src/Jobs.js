import React from 'react';
import Typography from '@material-ui/core/Typography';
import './App.css';

import Job from './Job';

export default function Jobs({ jobs }) {
  return (
    <div>
      <Typography variant='h1'>Entry Level Software Jobs</Typography>
      {jobs.map((job) => (
        <Job job={job} />
      ))}
    </div>
  );
}
