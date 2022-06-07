import React from 'react';
import './App.css';
import {Button, Divider, Grid, GridColumn, Input, Menu, MenuItem, MenuMenu, Segment} from "semantic-ui-react";

function App() {
    return (
        <Segment className={"App"} color={"black"} inverted={true}>
            <Menu pointing={true} borderless={true} inverted={true} color={"grey"} fixed={"top"}>
                <MenuMenu position={"right"}>
                    <MenuItem>
                        <Input icon={"search"} placeholder={"Twitch Streamer..."} />
                    </MenuItem>
                    <MenuItem>
                        <Input icon={"search"} placeholder={"Embed Code..."} />
                    </MenuItem>
                    <MenuItem>
                        <Button color={"blue"}>Watch</Button>
                    </MenuItem>
                </MenuMenu>
            </Menu>
            <Segment className={"content"} color={"grey"} inverted={true}>
                <Grid columns={2} relaxed={'very'}>
                    <GridColumn className={"youtube-wrapper"}>
youtube
                    </GridColumn>
                    <GridColumn className={"twitch-wrapper"}>
twitch
                    </GridColumn>
                </Grid>

                <Divider vertical={true} className={"divider-position"} inverted={true}/>
            </Segment>
        </Segment>
    );
}

export default App;
