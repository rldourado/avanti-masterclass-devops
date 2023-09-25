resource "aws_route53_zone" "stwconsult-tec-br" {
  name = "stwconsult.tec.br"
}

resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.stwconsult-tec-br.zone_id
  name    = "www.stwconsult.tec.br"
  type    = "A"
  ttl     = 300
  records = [var.www_a_record]
}

resource "aws_route53_record" "k8s" {
  zone_id = aws_route53_zone.stwconsult-tec-br.zone_id
  name    = "k8s.stwconsult.tec.br"
  type    = "CNAME"
  ttl     = 300
  records = [var.k8s_cname_record]
}
