import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useEffect, useState } from 'react';

// CUSTOM COMPONENTS
import FlexBox from '@/components/flexbox/FlexBox';
import { H1, Paragraph } from '@/components/typography';

// Types
interface ScoreData {
  score: number;
  change: number;
}

export default function ScoreDisplay(): JSX.Element {
  const [scoreData] = useState<ScoreData>({
    score: 650,
    change: 5.2
  });

  return (
    <Card sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box flex={1}>
        <FlexBox alignItems="center" gap={1.5}>
          <H1 sx={{ 
            fontSize: 30, 
            fontWeight: 500,
            color: 'text.primary',
            lineHeight: 1
          }}>
            {scoreData.score}
          </H1>
          <Box
            sx={{
              py: 0.5,
              px: 1,
              borderRadius: 1.5,
              fontSize: '13px',
              fontWeight: 500,
              bgcolor: 'primary.main',
              color: '#fff'
            }}
          >
            +{scoreData.change}%
          </Box>
        </FlexBox>

        <Paragraph 
          sx={{ 
            color: 'text.secondary',
            fontSize: '14px',
            mt: 0.5,
            fontWeight: 400
          }}
        >
          Performance Score
        </Paragraph>
      </Box>

      <Box>
        <FlexBox 
          justifyContent="space-between" 
          alignItems="center" 
          mb={1}
        >
          <Paragraph 
            sx={{ 
              color: 'text.secondary',
              fontSize: '14px',
              fontWeight: 400
            }}
          >
            Score Range
          </Paragraph>
          <Paragraph 
            sx={{ 
              color: 'text.secondary',
              fontSize: '14px',
              fontWeight: 400
            }}
          >
            0-700
          </Paragraph>
        </FlexBox>

        <Box
          sx={{
            height: 8,
            width: '100%',
            borderRadius: 4,
            bgcolor: theme => theme.palette.mode === 'light' ? '#F3F4F6' : 'grey.800'
          }}
        >
          <Box
            sx={{
              width: `${(scoreData.score / 700) * 100}%`,
              height: '100%',
              borderRadius: 'inherit',
              bgcolor: 'primary.main'
            }}
          />
        </Box>
      </Box>
    </Card>
  );
}
