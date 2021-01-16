#!/usr/bin/env python
# https://adventofcode.com/2020/day/1

my_list = []
with open("1.puzzle.txt") as fp:
  Lines = fp.readlines()
  for line in Lines:
    my_list.append(int(line))

my_list.sort()

num1 = 0
num2 = 0
for idx, x in enumerate(my_list):
  for y in range(0, len(my_list) - idx):
    if x + my_list[len(my_list) - 1 - y] == 2020:
      num1 = x
      num2 = my_list[len(my_list) - 1 - y]

sum = num1 * num2
assert sum == 121396

num3 = 0
for x in my_list:
  for y in my_list:
    for z in my_list:
      if x + y + z == 2020:
        num1 = x
        num2 = y
        num3 = z

sum = num1 * num2 * num3
assert sum == 73616634
