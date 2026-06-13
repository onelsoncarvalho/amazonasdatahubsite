require(amazonasdatahub)
require(dplyr)
rionegro_amazonas$date

mean(rionegro_amazonas$level_m)

rionegro_2010_02 <- rionegro_amazonas %>%
  filter(date >= "2010-06-01" & date <= "2010-12-31")

rionegro_2010_02

hist(rionegro_2010_02$level_m)
hist(rionegro_2010_02$increase_decrease_cm)
