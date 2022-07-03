import calendar


def count_sundays(day_of_week=0):
    """
    Count the number of Sundays on the first of the month
    """
    count = 0
    for year in range(1901, 2001):
        for month in range(1, 13):
            if day_of_week == calendar.weekday(year, month, 1):
                count += 1
    return count


if __name__ == "__main__":
    print(count_sundays())
