import * as React from 'react';
import { makeStyles, Typography, Card, Button, CardActions, CardActionArea, CardContent } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

interface Props {
    resultLanguage : string;
    resultText : string;
};

export const Result: React.FC<Props> = ({
    resultText,
    resultLanguage
}) => {
    const classes = useStyles();
      
    return (
        <Card raised className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {resultLanguage}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {resultText}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Copy
                </Button>
            </CardActions>
        </Card>
    );
}

export default Result;