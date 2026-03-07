import unittest

from logic import add


class TestLogic(unittest.TestCase):
    def test_add_numbers(self):
        self.assertEqual(add(10, 5), 15)
        self.assertEqual(add(-1, 1), 0)
        self.assertEqual(add(0, 0), 0)
        self.assertEqual(add(1, 1), 2)


if __name__ == "__main__":
    unittest.main()
