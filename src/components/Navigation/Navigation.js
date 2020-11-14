/* eslint-disable react/button-has-type */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import EuroIcon from '@material-ui/icons/Euro';

import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import { useTranslation } from 'react-i18next';
// import ChangeLanguageButtons from './ChangeLanguageButtons';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    margin: 20,
  },
});

const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// do function like this
// const changeLanguage = lng => {
//   i18n.changeLanguage(lng);
// };

const Navigation = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { t, i18n } = useTranslation();

  return (
    <>
      <StyledCenter>
        <Paper className={classes.root} elevation={15}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab
              style={{ fontSize: 17 }}
              icon={<DesktopMacIcon />}
              label={t('Desktop')}
              value="/"
              component={NavLink}
              to="/"
            />
            <Tab
              style={{ fontSize: 17 }}
              icon={<EuroIcon />}
              label={t('Finance')}
              value="/finance"
              component={NavLink}
              to="/finance"
            />
          </Tabs>
        </Paper>
        {/* <ChangeLanguageButtons
          language1="pl"
          language2="en"
          onClick1={() => i18n.changeLanguage('pl')}
          onClick2={() => i18n.changeLanguage('en')}
        /> */}
        <h1>{t('law')}</h1>
        <button onClick={() => i18n.changeLanguage('pl')}>pl</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
      </StyledCenter>
    </>
  );
};

export default Navigation;
