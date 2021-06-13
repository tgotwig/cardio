#!/usr/bin/env python
# https://adventofcode.com/2020/day/2
from collections import Counter 

counter = 0
with open("../data/2.puzzle.txt") as fp:
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

    counter += 1 if letter_is_between_min_max else 0

assert counter == 396

# ────────────────────────────

counter = 0
with open("../data/2.puzzle.txt") as fp:
  Lines = fp.readlines()
  for line in Lines:
    data = line.split()
    pos_list = data[0].split('-')
    pos_a = int(pos_list[0]) - 1
    pos_b = int(pos_list[1]) - 1
    letter = data[1][0]
    password = data[2]

    one_pos_true = (password[pos_a] == letter) ^ (password[pos_b] == letter)

    counter += 1 if one_pos_true else 0

assert counter == 428
