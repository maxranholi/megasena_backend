-- Active: 1663287797891@@35.226.146.116@3306@hooks-4313469-maximiliano-araujo
CREATE TABLE prize(
              id VARCHAR(255) PRIMARY KEY,
              name VARCHAR(12) NOT NULL,
              prize_number INT NOT NULL,
              prize_date VARCHAR(50) NOT NULL,
              draw_Numbers VARCHAR(255) NOT NULL
)