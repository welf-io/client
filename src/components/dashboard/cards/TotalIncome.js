import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// import MoneyIcon from '@material-ui/icons/Money';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import { red } from '@material-ui/core/colors';
import { useContext } from 'react';
import GlobalContext from '../../../contexts/GlobalContext';
import useTotalIncome from '../../../hooks/useTotalIncome';

const TotalIncome = (props) => {
  const { DemoIncome } = useContext(GlobalContext);
  const totalIncome = useTotalIncome(DemoIncome);
  return (
    <Card sx={{ height: '100%' }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Total Income
            </Typography>
            <Typography color="textPrimary" variant="h3">
              $
              {' '}
              {parseFloat(totalIncome).toFixed(2)}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: red[600],
                height: 56,
                width: 56
              }}
            >
              <MonetizationOnOutlinedIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ArrowDownwardIcon sx={{ color: red[900] }} />
          <Typography
            sx={{
              color: red[900],
              mr: 1
            }}
            variant="body2"
          >
            12%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default TotalIncome;
