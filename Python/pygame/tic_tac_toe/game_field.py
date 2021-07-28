import pygame
import sys

size = (510, 510)
screen = pygame.display.set_mode(size)
pygame.display.set_caption("Game field")
img = pygame.image.load("cat.png")
pygame.display.set_icon(img)
width = height = 40




while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit(0)
