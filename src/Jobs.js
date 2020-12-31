import React from 'react';
import Typography from '@material-ui/core/Typography';
import './App.css';

import Job from './Job';

export default function Jobs({ jobs }) {
  return (
    <div className='officialheader'>
      <div className='titleheader'>
        <Typography variant='h1'>Entry Level Software Jobs</Typography>
      </div>
      <div>
        {jobs.map((job) => (
          <Job job={job} />
        ))}
      </div>
    </div>
  );
}
