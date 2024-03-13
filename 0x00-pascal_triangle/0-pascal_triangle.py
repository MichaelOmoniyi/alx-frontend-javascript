#!usr/bin/python3
""" This module creates the pascal triangle based on a given number """


def pascal_triangle(n):
    """
    Args:
        n (int): the pascal number
    Return:
        A list of lists of integers representing the Pascal’s triangle of n
    """

    if n <= 0:
        return []
    else:
        triangle = [[1]]
        if n == len(triangle):
            return triangle
        else:
            for row in range(1, n):
                newRow = subTriangle(triangle[-1])
                triangle.append(newRow)
            return triangle


def subTriangle(newRow):
    """ Forms the new row to be added to the triangle """

    sub = [1]

    if len(newRow) > 1:
        for num in range(len(newRow) - 1):
            currentNum = newRow[num]
            nextNum = newRow[num + 1]
            newNum = currentNum + nextNum
            sub.append(newNum)

    sub.append(1)
    return (sub)
