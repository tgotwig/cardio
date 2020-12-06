# https://adventofcode.com/2020/day/2
from collections import Counter 

counter = 0
with open("2.data.txt") as fp:
  Lines = fp.readlines()
  for line in Lines:
    data = line.split()
    min_max = data[0].split('-')
    min = int(min_max[0])
    max = int(min_max[1])
    letter = data[1][0]
    password = data[2]

    letters_cnt = Counter(password)[letter]
    letter_is_between_min_max = min <= letters_cnt <= max

    print(min, max, letter, password, '|', letter_is_between_min_max)

    counter += 1 if letter_is_between_min_max else 0

assert counter == 396
