import { Grid } from '@mui/material';
import React from 'react';
import AchievementItem from './AchievementItem';

import unityBadge from './unity-essentials-pathway.png';
import ualCert from './ual-certificate.png';
import amaDean from './ama_dean.jpg';

const AchievementsPanel = () => {
  return (
    <Grid container justifyContent="space-around" direction="row" spacing={3}>
      <AchievementItem
        label={'Unity'}
        letter={'U'}
        title={'Unity Essential Pathway'}
        image={unityBadge}
        issuedBy={'Unity Technologies'}
        issuedDate={'JAN. 30,2021'}
        subheader={'Certificate'}
        link={
          'https://www.credly.com/badges/a699ed8a-4341-4bf8-be1d-c54d5c9adc92?source=linked_in_profile'
        }
      />
      <AchievementItem
        label={'Futurelearn'}
        letter={'F'}
        title={'Introduction to Indie Games'}
        image={ualCert}
        issuedBy={'UAL Creative Computing'}
        issuedDate={'MAR. 22,2021'}
        subheader={'Certificate'}
        link={'https://www.futurelearn.com/certificates/3fwxqfe'}
      />
      <AchievementItem
        label={'Sololearn'}
        letter={'S'}
        title={'React + Redux course'}
        image={'https://www.sololearn.com/Certificate/1097-9659446/jpg'}
        issuedBy={'Sololearn'}
        issuedDate={'Sept. 29,2021'}
        subheader={'Certificate'}
        link={'https://www.sololearn.com/Certificate/1097-9659446/jpg'}
      />
      <AchievementItem
        label={'AMA'}
        letter={'A'}
        title={"Dean's lister G.W.A 1.60"}
        image={amaDean}
        issuedBy={'AMA'}
        issuedDate={'May. 12,2017'}
        subheader={'Award'}
        link={amaDean}
      />
    </Grid>
  );
};

export default AchievementsPanel;
