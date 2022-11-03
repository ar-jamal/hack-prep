import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ExpandLess, ExpandMore, ListRounded, ReceiptLong, SortRounded, StarBorder } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import CourseForm from "./courseForm";
import QuizForm from "./quizForms";
import ResultUpdate from "./resultUpdate";
import NotFound from "./NotFound";
const drawerWidth = 240;

function AdminPanel({ data, ...props }) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawerList = [
        {
            route: "admin/",
            name: "Course Form",
            icon: () => <ListRounded />
        },
        {
            route: "quizform",
            name: "Quiz form",
            icon: () => <ReceiptLong />
        },
        {
            route: "resultupdate",
            name: "Result Update",
            icon: () => <SortRounded />
        },
    ]

    const drawer = (
        <div>
            {/* <Toolbar /> */}
            {/* <Divider /> */}
            <List>
                {drawerList.map((Obj, index, { length }) => (
                    <ListItem key={index} disablePadding onClick={() => { index === length - 1 && setOpen(s => !s) }}>
                        <ListItemButton onClick={() => {
                            navigate(Obj.route)
                        }}>
                            <ListItemIcon>
                                {Obj.icon()}
                            </ListItemIcon>
                            <ListItemText primary={Obj.name} />
                            {
                                index === length - 1 && (open ? <ExpandLess /> : <ExpandMore />)
                            }
                        </ListItemButton>
                    </ListItem>
                ))}
                {/* <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {data.map((item, ind) => (

                            <ListItem key={ind} onClick={() => navigate('/dashboard/news-data/details', {
                                state: {
                                    item
                                }
                            })}>

                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary={item.title.slice(0, 5) + '...'} />
                                </ListItemButton>
                            </ListItem>
                        ))
                        }
                    </List>
                </Collapse> */}
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Admin Panel
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                <Box>
                    <Routes>
                        <Route path="admin/" element={<CourseForm />} />
                        <Route path="quizform" element={<QuizForm />} />
                        <Route path="resultupdate" element={<ResultUpdate />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Box>
            </Box>
        </Box>
    );
}

AdminPanel.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default AdminPanel;


