import React from 'react'
import {
    Grid,
    Paper,
    Typography,
    SvgIcon,
    List,
    ListItem
 } from '@material-ui/core'

const CountryInfoList = ({ icon, title, info }) => {

    return(
        <Grid>
            <Grid 
                container
                spacing={2}
            >
                <Grid 
                    item
                    xs={2}
                >
                    <Paper 
                        elevation={0}
                    >
                        <Typography variant="subtitle1">
                            <SvgIcon>
                                {icon}
                            </SvgIcon>
                            {title}
                        </Typography>
                        <List>
                            { 
                                info.map((lan, id) => <ListItem key={id}>{lan.name}</ListItem>)
                            }
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CountryInfoList