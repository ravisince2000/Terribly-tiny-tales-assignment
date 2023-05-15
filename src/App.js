import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://www.terriblytinytales.com/test.txt'
      );

      const words = response.data.split(/\s+/); // Split text into words
      const wordCountMap = new Map();

      words.forEach((word) => {
        const count = wordCountMap.get(word) || 0;
        wordCountMap.set(word, count + 1);
      });

      const sortedWordCount = Array.from(wordCountMap.entries()).sort(
        (a, b) => b[1] - a[1]
      );

      const top20Words = sortedWordCount.slice(0, 20);

      const labels = top20Words.map((word) => word[0]);
      const counts = top20Words.map((word) => word[1]);

      const chartData = {
        labels,
        datasets: [
          {
            label: 'Word Frequency',
            data: counts,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderWidth: 1,
          },
        ],
      };

      setData(chartData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleExport = () => {
    const csvContent = `data:text/csv;charset=utf-8,Word,Count\n${data.labels
      .map((label, index) => `${label},${data.datasets[0].data[index]}`)
      .join('\n')}`;

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'word_frequency.csv');
    document.body.appendChild(link);
    link.click();
  };

  useEffect(() => {
    if (data) {
      const ctx = document.getElementById('chart');
      new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [data]);

  return (
    <div>
      <h1>Word Frequency Histogram</h1>
      <button onClick={fetchData}>Submit</button>
      {data && (
        <div>
          <canvas id="chart" />
          <button onClick={handleExport}>Export</button>
        </div>
      )}
    </div>
  );
};

export default App;