/** @type {import('tailwindcss').Config} */const columns = {};
for (let i = 1; i<=24; i++) {
  const key = `${i}/24`;
  columns[key] = `${100/24} * i`;
}
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        
        'primary': '#01B93F',
        'primary-50': '#1A7D40',
        'primary-100': '#F7F8FA;',
        'primary-200': '#436879',
        'primary-300': '#7E97A2',
        'primary-400': '#C1CED3',
        'secondary': ' #1072F1',
        'light-green': '#99CC01',
        'primary-500':'#F7F8FA',
        'primary-600':'rgba(8, 58, 80, 0.5)',
        'primary-700':'#436879',
        'primary-800':'#083A50',
        'primary-900':'#1072F1',
        'yellow': '#FFC000',
        'blue': '#06B0D7',
        'purple': '#673AB7',
        'metal':'#083A50',
        'green':'#1A7D40'
      },  
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      width: columns},
  },
  plugins: [],
}
