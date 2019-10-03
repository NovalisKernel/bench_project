import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import Tooltip from '@material-ui/core/Tooltip';

const GoBack = ({ history }) =>
    <Tooltip title="Go back">
        <Button color="inherit" onClick={() => history.goBack()}>
            <KeyboardBackspace />
        </Button>
    </Tooltip >;

export default withRouter(GoBack);