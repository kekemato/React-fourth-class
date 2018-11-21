import React from 'react'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'

const Navigation = (props) => (
    <div>
        <AppBar
            title="ePla"
            onLeftIconButtonClick={() => alert("clicked!")}
        />

        <Drawer
            docked={false}
            width={200}
            open={true}
            onRequestChange={(open) => console.log(open)}
        >
        </Drawer>
    </div>
)

export default Navigation