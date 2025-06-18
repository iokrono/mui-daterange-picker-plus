import React from "react";
import { isSameDay } from "date-fns";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  alpha,
  useTheme,
  Grid,
} from "@mui/material";
import type { DateRange, DefinedRange } from "../types/utils";

type DefinedRangesProps = {
  setRange: (range: DateRange) => void;
  selectedRange: DateRange;
  ranges: DefinedRange[];
};

const isSameRange = (first: DateRange, second: DateRange) => {
  const { startDate: fStart, endDate: fEnd } = first;
  const { startDate: sStart, endDate: sEnd } = second;
  if (fStart && sStart && fEnd && sEnd) {
    return isSameDay(fStart, sStart) && isSameDay(fEnd, sEnd);
  }
  return false;
};

export const DefinedRanges: React.FunctionComponent<DefinedRangesProps> = ({
  ranges,
  setRange,
  selectedRange,
}: DefinedRangesProps) => {
  const theme = useTheme();

  return (
    <>
      <Grid xs="auto">
        <Box
          height="54px"
          sx={{
            backgroundColor: alpha(theme.palette.background.paper, 0.1),
          }}
        ></Box>
      </Grid>
      <Grid>
        <List
          sx={{
            pt: "10px",
          }}
        >
          {ranges.map((range, idx) => (
            <ListItem
              disablePadding
              key={idx}
              onClick={() => setRange(range)}
              sx={[
                isSameRange(range, selectedRange)
                  ? {
                      backgroundColor: alpha(theme.palette.primary.contrastText, 0.1),
                    }
                  : {},
              ]}
            >
              <ListItemButton
                disableRipple
                dense
                sx={{
                  p: {
                    xs: "8px",
                    md: "12px",
                  },
                  height: "32px",
                  ".mui-tlelie-MuiListItemText-root": {
                    my: 0,
                  },
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    sx: [
                      isSameRange(range, selectedRange)
                        ? {
                            color: alpha(theme.palette.primary.dark, 1),
                          }
                        : {
                            color: alpha(theme.palette.primary.light, 1),
                          },
                      {
                        fontSize: 13,
                        fontWeight: 400,
                      },
                    ],
                  }}
                >
                  {range.label}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
    </>
  );
};
