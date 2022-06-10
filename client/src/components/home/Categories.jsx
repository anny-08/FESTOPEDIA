import { Button, makeStyles, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { categories1 } from '../../constants/categories1';
import { categories2 } from '../../constants/categories2';
import { categories3 } from '../../constants/categories3';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    tableRow: {
        height: 20,
    },
    tableBody: {
        "&:focus": {
          color: "yellow !important",
          backgroundColor: "#3D85D2 !important",
        }
    },
    create: {
        fontSize: 15,
        marginTop: 12,
        //marginRight: 5,
        marginLeft: 8,
        marginBottom: 20,
        background: '#c88e51',
        color: 'white',
        width: '94%'
    },
    table: {
        border: '1px solid rgba(224, 224, 224, 1)',
    },
    tableCell: {
        cursor: 'pointer',
        textAlign: 'center',
        padding: "0px 16px",
        fontWeight: 'bold',
        fontSize: 16,
        color: '#322b49',
        background: '#f7f0dd'
    },
    tableHeading: {
        fontSize: 18,
        fontWeight: 600,
        textAlign: 'center',
        padding: "6px 16px",
        background: '#f8d1dd' //'#a8a1c0'//'#bd92a7'//'
    },
    tableSubheading: {
        fontSize: 16,
        fontWeight: 600,
        textAlign: 'center',
        color: '#ffffff',
        padding: "4px 16px",
        background: '#9a9090'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    dot: {
        color: '#ffffff'
    }
})

const Categories = () => {
    const classes = useStyles();
    return (
        <>
            <Link to='/create' style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button className={classes.create} variant='contained'>CREATE NEW BLOG</Button>
            </Link>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeading}>
                            <Link to={'/'} className={classes.link}>
                                ALL CATEGORIES
                            </Link>  
                        </TableCell>   
                    </TableRow>
                </TableHead>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableSubheading}>FESTS</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        categories1.map(category => (
                            <TableRow>
                                <TableCell className={classes.tableCell}>
                                <Link to={`/?category=${category}`} className={classes.link}>
                                    {category}
                                </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableSubheading}>CLUBS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories2.map(category => (
                            <TableRow>
                                <TableCell className={classes.tableCell}>
                                    <Link to={`/?category=${category}`} className={classes.link}>
                                        {category}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
                <TableBody>
                    <div className={classes.dot}>.</div>
                </TableBody>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeading}>
                            <Link to={'/'} className={classes.link}>ALL BLOG TYPES</Link>
                        </TableCell>   
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories3.map(category => (
                            <TableRow>
                                <TableCell className={classes.tableCell}>
                                    <Link to={`/?blogtype=${category}`} className={classes.link}>
                                            {category}
                                        </Link>
                                    </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default Categories;