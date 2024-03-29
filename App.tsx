import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeContextProvider } from './src/presentation/context/ThemeContext';
import { Navigator } from './src/presentation/navigator/StackNavigator';

const queryClient = new QueryClient()
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <ThemeContextProvider>
        <Navigator />
    </ThemeContextProvider>
  </QueryClientProvider>
  );
}

