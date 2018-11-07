import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TablePagination,
  withStyles,
  TableCell,
  TableRow
} from "@material-ui/core";
import ListItem from "./ListItem";
import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedTableToolbar from "./EnhancedTableToolbar";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 10
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

let counter = 0;

function createData(
  description,
  raisedOn,
  likelihood,
  impact,
  severity,
  owner,
  mitigation,
  contingent,
  progress,
  status
) {
  counter += 1;
  return {
    id: counter,
    description,
    raisedOn,
    likelihood,
    impact,
    severity,
    owner,
    mitigation,
    contingent,
    progress,
    status
  };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  {
    id: "description",
    numeric: false,
    disablePadding: true,
    label: "Description"
  },
  { id: "raisedOn", numeric: false, disablePadding: false, label: "Raised On" },
  {
    id: "likelihood",
    numeric: false,
    disablePadding: false,
    label: "Likelihood"
  },
  { id: "impact", numeric: false, disablePadding: false, label: "Impact" },
  { id: "severity", numeric: false, disablePadding: false, label: "Severity" },
  { id: "owner", numeric: false, disablePadding: false, label: "Owner" },
  {
    id: "mitigation",
    numeric: false,
    disablePadding: false,
    label: "Mitigation"
  },
  {
    id: "contingent",
    numeric: false,
    disablePadding: false,
    label: "Contingent"
  },
  { id: "progress", numeric: false, disablePadding: false, label: "Progress" },
  { id: "status", numeric: false, disablePadding: false, label: "Status" }
];

class RegisterTable extends React.Component {
  state = {
    order: "asc",
    orderBy: "status",
    selected: [],
    data: [],
    page: 0,
    rowsPerPage: 5
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch("/api/registers")
      .then(data => data.json())
      .then(data => {
        this.setState({
          data
        });
      });
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = checked => {
    if (checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = id => {
    const { selected } = this.state;
    var selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = event => {
    this.setState({ page: event.target.value });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) > -1;

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              rows={rows}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <ListItem
                      key={n.id}
                      isSelected={isSelected}
                      handleClick={() => this.handleClick(n.id)}
                      {...n}
                    />
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={rows.length + 1} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(RegisterTable);
