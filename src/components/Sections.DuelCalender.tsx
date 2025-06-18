import { isSameMonth } from "date-fns";
import type { Locale } from "date-fns";
import { Divider, Grid } from "@mui/material";
import { Month } from "./Month";
import { MARKERS } from "../Constants/markers";
import { NavigationAction } from "../types/utils";
import type { DateRange } from "../types/utils";

type DuelCalenderProps = {
  firstMonth: Date;
  secondMonth: Date;
  handleSetFirstMonth: (date: Date) => void;
  handleSetSecondMonth: (date: Date) => void;
  canNavigateCloser: boolean;
  commonProps: {
    dateRange: DateRange;
    minDate: Date;
    maxDate: Date;
    helpers: {
      isInHoverRange: (day: Date) => boolean;
    };
    handlers: {
      handleClickDateNumber: (day: Date) => void;
      handleHoverDateNumber: (day: Date) => void;
      handleClickNavIcon: (marker: symbol, action: NavigationAction) => void;
    };
  };
  locale?: Locale;

  hideOutsideMonthDays?: boolean;
};

export const DuelCalender = ({
  firstMonth,
  secondMonth,
  handleSetFirstMonth,
  handleSetSecondMonth,
  canNavigateCloser,
  commonProps,
  locale,
  hideOutsideMonthDays,
}: DuelCalenderProps) => {
  const canNavigateBack = !isSameMonth(firstMonth, commonProps.minDate);
  const canNavigateForward = !isSameMonth(secondMonth, commonProps.maxDate);

  return (
    <Grid
      xs={12}
      container
      direction={{
        xs: "column",
        md: "row",
      }}
      justifyContent="center"
    >
      <Grid xs="auto" container direction={"column"}>
        <Month
          {...commonProps}
          currentDate={firstMonth}
          otherDate={secondMonth}
          setMonth={handleSetFirstMonth}
          navState={[canNavigateBack, canNavigateCloser]}
          marker={MARKERS.FIRST_MONTH as symbol}
          locale={locale}
          hideOutsideMonthDays={hideOutsideMonthDays}
        />
      </Grid>

      <Grid xs="auto">
        <Divider orientation="vertical" />
      </Grid>

      <Grid xs="auto" container direction={"column"}>
        <Month
          {...commonProps}
          currentDate={secondMonth}
          otherDate={firstMonth}
          setMonth={handleSetSecondMonth}
          navState={[canNavigateCloser, canNavigateForward]}
          marker={MARKERS.SECOND_MONTH as symbol}
          locale={locale}
          hideOutsideMonthDays={hideOutsideMonthDays}
        />
      </Grid>
    </Grid>
  );
};
