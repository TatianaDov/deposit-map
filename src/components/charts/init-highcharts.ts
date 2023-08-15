import Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';
import noData from 'highcharts/modules/no-data-to-display';
import sunburst from 'highcharts/modules/sunburst';

Highcharts.setOptions({
  lang: {
    resetZoom: 'Уменьшить',
  },
  time: {
    useUTC: false,
  },
});
HC_more(Highcharts);
noData(Highcharts);
sunburst(Highcharts);

export default Highcharts;
