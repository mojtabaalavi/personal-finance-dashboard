import app from './app';

const PORT = process.env.PORT || 4003;

app.listen(PORT, () => {
  console.log(`Property Service running on port ${PORT}`);
});
